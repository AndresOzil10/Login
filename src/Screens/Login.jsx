import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons"
import { Button, Checkbox, Divider, Input, message } from "antd"
import Link from "antd/es/typography/Link"
import { useState } from "react"
import { FaFacebookSquare } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

const Login = () => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const handleLogin = () => {
        // Resetear errores
        setUsernameError(false)
        setPasswordError(false)

        // Validar campos
        if (!username) {
            setUsernameError(true)
        }
        if (!password) {
            setPasswordError(true)
        }

        // Si ambos campos son válidos, proceder con el inicio de sesión
        if (username && password) {
            console.log('Logging in with:', { username, password })
            // Aquí puedes agregar la lógica para manejar el inicio de sesión
        } else {
            message.error('Please enter both username and password!')// Muestra un mensaje de error
        }
    };

    return (
        <div className="flex w-screen h-screen">
            {/* Columna de la imagen */}
            <div className="flex-2 bg-[url(assets/images/bg.png)] bg-cover bg-center h-full">
                {/* Puedes agregar más contenido aquí si lo deseas */}
            </div>

            {/* Columna de los inputs */}
            <div className="flex-1 flex flex-col justify-center p-8 bg-blue-100">
                <h1 className="text-4xl font-bold mb-6 text-center text-purple-800">Get Started</h1>
                <p className="text-center mb-6 text-gray-600">Already have an account? <Link to="/signin" className="text-purple-800 underline">Sign In</Link></p>

                <div className="mb-4 w-96 ml-30 ms:ml-15">
                    <Input 
                        placeholder="Username" 
                        className="h-12"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del usuario
                        status={usernameError ? 'error' : ''} // Aplica el estado de error
                    />
                </div>
                <div className="w-96 ml-30 ms:ml-15">
                    <Input.Password
                        placeholder="Password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="h-12"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                        status={passwordError ? 'error' : ''} // Aplica el estado de error
                    />
                </div>

                <div className="mt-5 ml-30 ms:ml-15">
                    <Button 
                        color="purple" 
                        variant="solid"
                        className="w-96" 
                        style={{ borderRadius: 8, height: 45 }} 
                        ghost 
                        onClick={handleLogin} // Llama a la función de inicio de sesión
                    >
                        Sign In
                    </Button>
                    <Checkbox onChange={(e) => console.log(`checked = ${e.target.checked}`)}>Remember me</Checkbox>
                </div>
                <div className="mt-[-25px] ml-98 ms:ml-83 ">
                    <Link to="/forgot-password" className="text-purple-800 underline">Forgot Password?</Link>
                </div>
                <div className="flex justify-center">
                    <Divider className="w-1/2 ms:w-1/3">
                        Or
                    </Divider>
                </div>
                <div className="md:mt-1 ml-30 ms:ml-15">
                    <Button
                        icon={<FcGoogle />}
                        style={{ borderRadius: 8}}
                    >
                        Sign In with Google
                    </Button>
                </div>
                <div className="md:mt-[-30px] ml-80">
                    <Button
                        icon={<FaFacebookSquare />}
                        style={{ borderRadius: 8}}
                    >
                        Sign In with Facebook
                    </Button>
                    
                </div>
            </div>
        </div>
        
    )
 }

 export default Login