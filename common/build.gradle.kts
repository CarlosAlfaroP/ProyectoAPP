plugins {
    kotlin("multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
}

kotlin {
    // Targets
    androidTarget() {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    jvm("desktop") {
        jvmToolchain(11)
    }
    js(IR){
        browser()
    }

    //SourceSets
    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.runtime)
                implementation(compose.ui)
                implementation(compose.foundation)
                implementation(compose.material)
                implementation(compose.material3)
            }
        }
        val androidMain by getting {
            dependencies {
                // Android specific deps
            }
        }
        val desktopMain by getting {
            dependencies {
                // Desktop specifc deps
            }
        }

        val jsMain by getting {
            dependencies {
                // JS specific dps
            }
        }
    }
}

android() {
    namespace = "com.example.proyectoapp.common"
    compileSdk = 34

    defaultConfig {
        minSdk = 24
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }


}
