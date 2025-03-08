import Apresentacao from "@/Components/Apresentacao";
import Contato from "@/Components/Contato";
import Header from "@/Components/Header";
//import emailImage from '../../public/Images/email.svg';

export default function Home() {
  return (
    <div className="w-full p-10  justify-items-center justify-center content-center">
      <div className="bg-white w-4xl justify-center content-center justify-items-center m-5 p-5 rounded-2xl">
        <Header />
        <Apresentacao/>
        <Contato 
          textoDoLink="https://matheuspascui.vercel.app/"
          textoContato="https://matheuspascui.vercel.app/"
          nomeImg="link"
        />
        <Contato 
          textoDoLink="matheuspascui@gmail.com"
          textoContato="matheuspascui@gmail.com"
          nomeImg="email"
        />
        <Contato 
          textoDoLink="https://linkedin.com/in/matheuspascui"
          textoContato="Matheus Páscui"
          nomeImg="linkedin"
        />
        <Contato 
          textoDoLink="https://github.com/matheuspascui"
          textoContato="matheuspascui"
          nomeImg="github"
        />
      </div>
    </div>
  );
}
