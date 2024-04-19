import "./Error.css"

//fonction pour afficher une page d'erreur si la page demandée n'existe pas
function Error() {

  return (
      <main className="error">
          <div className='error-div'>
              <div className='error_404'>404</div>
              <div className='error_text'>Oups! La page que vous demandez n'existe pas.</div>
              <a className='styled_link' href="/">Retourner sur la page d’accueil </a>
          </div>
      </main>
  );
}

export default Error