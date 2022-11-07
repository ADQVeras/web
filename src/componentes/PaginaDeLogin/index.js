import './PaginaDeLogin.css'
 
const PaginaDeLogin = () =>{
    return(
        <div className='pagina'>

            <div className='p-coluna'>
                <div>
                    <h1>IMPULSIONE</h1>
                </div>

                <div>
                    <h2>Desenvolver pessoas <br/>Impulsionar negócios <br/>Conectar pessoas</h2>
                </div>

                <div className='botoes'>
                    <button className='bt1'><nobr>ENTRAR NA MINHA CONTA</nobr></button>
                    <button className='bt2'><nobr>ME CADASTRAR COMO PF</nobr></button>
                    <button className='bt3'><nobr>CADASTRAR MEU NEGÓCIO</nobr></button>
                </div>

            </div>


            <div className='s-coluna'>
               
                <div className='bt-acesso'>
                    <button className='bt-acesso1'>Continuar com Google</button>
                    <button className='bt-acesso2'>Continuar com Facebook</button>
                </div>

                <form>
                    <div className='form'>
                        <div>
                            <label className='label-input-email'>E-MAIL</label>
                            <input className='input-email' type='text'  placeholder='seu acesso de e-mail'></input>
                        </div>

                        <div>
                            <label className='label-input-senha'>SENHA</label>
                            <input className='input-senha' type='password' placeholder='******'></input>
                        </div>

                        <button className='bt-entrar-input'>ENTRAR</button>

                        <p>esqueci minha senha</p>
                    </div>
                </form>
            
            </div>


        </div>
     

    ) 
}
export default PaginaDeLogin;