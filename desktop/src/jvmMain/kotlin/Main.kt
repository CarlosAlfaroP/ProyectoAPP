import androidx.compose.desktop.ui.tooling.preview.Preview
import androidx.compose.runtime.Composable
import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import com.example.proyectoapp.common.App

fun main () {
    application {
        Window(
            title = "Aplicacion",
            onCloseRequest = ::exitApplication
        ) {
            App()
        }
    }
}

@Preview
@Composable
fun PreviewMain() {
    App()
}
