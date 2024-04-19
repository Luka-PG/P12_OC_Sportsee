import './EmptyPage.css'

//fonction qui affiche une page vide si la page n'es pas encore finie
function EmptyPage() {
    return (
        <main>
            <div className="empty_div">
                <div className="empty_text">🚧 Cette page est en cours de construction ! 👷 🚧</div>
            </div>
        </main>
    );
  }
  
  export default EmptyPage