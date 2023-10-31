package com.example.proyectoapp
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.proyectoapp.common.App

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            //Text(text = "Este es un grato saludo!")
            App()
        }
    }
}

@Preview(showSystemUi = true, showBackground = true)
@Composable
fun PreviewMainActivity() {
    App()
}
