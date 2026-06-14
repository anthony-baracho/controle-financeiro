import { Link } from "react-router-dom";
import errorNotFound from "../assets/errornotfound.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="relative">

        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[40px]" />

        <div className="
          relative
          bg-slate-900
          border
          border-slate-800
          rounded-[32px]
          px-10
          py-12
          shadow-2xl
          text-center
          max-w-xl
        ">

          <div className="flex justify-center mb-6">
            <img
              src={errorNotFound}
              alt="Página não encontrada"
              className="w-96 h-auto"
            />
          </div>

          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Erro 404
          </p>

          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Oops! Página não encontrada
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Link
            to="/home"
            className="
              inline-flex
              items-center
              justify-center
              px-7
              py-3
              rounded-xl
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-medium
              transition-all
              duration-200
              shadow-lg
              shadow-blue-500/20
            "
          >
            Voltar para o início
          </Link>

        </div>

      </div>

    </div>
  );
}