# Olympic Medal Table - Frontend

Frontend da aplicação _Olympic Medal Table_ (para ter acesso ao backend, [clique aqui](https://github.com/pedromatos2806/Olympic-table-medal)).

A aplicação foi desenvolvida majoritariamente com JavaScript, através do framework [React JS](https://react.dev/) e o servidor de desenvolvimento local [Vite](https://vitejs.dev/). Foram escritos alguns blocos de código em HTML como parte dos componentes funcionais do React para estruturar as páginas que dão corpo ao projeto. Além disso, houve uso de CSS para estilização da interface do usuário.

A interface do usuário é composta pelos seguintes páginas e componentes:

<h1>Navbar</h1>

É um componente comum a todas as páginas que podem ser acessadas pelo usuário. Toda a extensão de sua área é clicável, e o clique direciona o usuário à página `Home`, descrita na próxima seção. Há ainda, no canto direito, um botão que é apresentado de maneira diferente, a depender do estado da aplicação: enquanto o usuário não efetuar o login, é apresentado um botão `Entrar`, que tem a cor verde é direciona o usuário para a página `Login`. Se o usuário estiver logado no sistema, é apresentado um botão `Sair`, que tem a cor vermelha e é responsável por encerrar a sessão do usuário e direcioná-lo à página inicial da aplicação.

<h1> Home </h1>

Nessa página, o usuário é apresentado à listagem de *países que possuem alguma medalha cadastrada*, que são ordenados de acordo com a quantidade de medalhas que cada um possui. O componente de cada país conta com um botão `Detalhar`, responsável por direcionar o usuário a uma página que contém os detalhes das medalhas desse país. São as páginas `Pais`, discutidas na próxima sessão.


<h1>Pais</h1>

Nessa página, é apresentado ao usuário uma listagem de todas as medalhas registradas no país em questão. Há também um botão `Seguir`, que ao ser clicado pode executar duas ações diferentes a depender do estado da aplicação: se o usuário não estiver logado no sistema, ele será direcionado à pagina `Login`. Se estiver, sua conta será vinculada ao país, e ele passará a receber um e-mail de notificação, toda vez que uma nova medalha for cadastrada neste país (para mais detalhes sobre essa funcionalidade, ler o README do [back-end dessa aplicação](https://github.com/pedromatos2806/Olympic-table-medal)).