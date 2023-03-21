// function ou arrow function - seja consistente
export const Header = ({ logout }) => {
   return(
        <header>
            { /* addEventListener */}
            <button onClick={logout}>Sair</button>
        </header>
    )
}
