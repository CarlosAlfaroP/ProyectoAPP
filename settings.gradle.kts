pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    //repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
    //repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        maven { url = uri("https://maven.pkg.jetbrains.space/public/p/compose/dev") }
        google()
        mavenCentral()
        //maven { url = uri("https://jitpack.io") }
    }
}

rootProject.name = "ProyectoApp"
include(
    ":android",
    ":desktop",
    ":web",
    ":common"
)
