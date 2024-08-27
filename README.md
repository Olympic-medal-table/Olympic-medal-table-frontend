# Olympic Medal Table - Frontend

Frontend da aplicação _Olympic Medal Table_ (para ter acesso ao backend, [clique aqui](https://github.com/pedromatos2806/Olympic-table-medal)).

A aplicação foi desenvolvida majoritariamente com JavaScript, através do framework [React JS](https://react.dev/) e o servidor de desenvolvimento local [Vite](https://vitejs.dev/). Foram escritos alguns blocos de código em HTML como parte dos componentes funcionais do React para estruturar as páginas que dão corpo ao projeto. Além disso, houve uso de CSS para estilização da interface do usuário.

A interface do usuário é composta pelos seguintes páginas e componentes:

<h1>Navbar</h1>

É um componente comum a todas as páginas que podem ser acessadas pelo usuário. Toda a extensão de sua área é clicável, e o clique direciona o usuário à página `Home`, descrita na próxima seção. Há ainda, no canto direito, um botão que é apresentado de maneira diferente, a depender do estado da aplicação: enquanto o usuário não efetuar o login, é apresentado um botão `Entrar`, que tem a cor verde é direciona o usuário para a página `Login`. Se o usuário estiver logado no sistema, é apresentado um botão `Sair`, que tem a cor vermelha e é responsável por encerrar a sessão do usuário e direcioná-lo à página inicial da aplicação. Há ainda, um botão que é apresentado condicionalmente, que é o `Cadastro de medalhas`. Esse botão só aparece para usuários administradores, e ao ser clicado, direciona o usuário administrador para a página de cadastro de medalhas (mais sobre isso nas próximas seções).

<h1> Home </h1>

Nessa página, é apresentada ao usuário uma tabela com a listagem de *países que possuam pelo menos uma medalha cadastrada*, ordenados pela quantidade de medalhas. Cada país é apresentado em uma linha da tabela, e conta com um botão `Detalhar`, responsável por direcionar o usuário a uma página que contém os detalhes de suas medalhas. São as páginas `Pais`, discutidas na próxima sessão.


<h1>Pais</h1>

Nessa página, é apresentado ao usuário uma listagem de todas as medalhas registradas no país em questão. Há também um botão `Seguir`, que pode executar duas ações diferentes ao ser clicado, a depender do estado da aplicação Se o usuário não estiver logado no sistema, ele será direcionado à pagina `Login`. Se estiver, sua conta será vinculada ao país, e ele passará a receber um e-mail de notificação, toda vez que uma nova medalha for cadastrada neste país (para mais detalhes sobre essa funcionalidade, ler o README do [backend dessa aplicação](https://github.com/pedromatos2806/Olympic-table-medal)).


<h1>Login</h1>

Aqui, aparecem na tela dois campos para que o usuário insira seu e-mail(que servirá como username) e sua senha. Há também dois botões. O primeiro é o `Entrar`, responsável por efetivar o login. Se as credenciais forem válidas, o usuário será autenticado (pelo [backend](https://github.com/pedromatos2806/Olympic-table-medal)) e terá uma sessão iniciada, sendo em seguida direcionado à `Home`. Caso contrário, recebe um aviso de credenciais inválidas. O outro botão é o `Cadastrar usuário`, que leva o usuário para página `Cadastro`.

<h1>Cadastro</h1>

Semelhante à tela `Login`, são apresentados campos para preenchimento e um botão para submissão dos dados fornecidos. O usuário deve preencher os campos `Nome`, `Email` e  `Senha` para se cadastrar. O cadastro é concluído ao clicar no botão `Cadastrar`. Feito isso, as credenciais serão registradas no banco de dados para que o usuário seja capaz de efetuar login através delas futuramente.

> ##### **IMPORTANTE:** no backend existe um atributo que o usuário recebe ao ser cadastrado, chamado de role(papel/atribuição, em inglês). Esse atributo pode ter dois valores: _USER_ ou _ADMIN_, sendo que um mesmo usuário pode ter ambos. A diferença entre as duas é que o usuário com _ADMIN_ nas credenciais possui algumas autorizações a mais que o usuário que tem apenas _USER_. Por padrão, um novo usuário recebe apenas o role _USER_.


<h1>Medalha</h1>

Essa página é reservada para acesso de administradores, usuários comuns não podem acessá-la. Sua finalidade é realizar o cadastro de medalhas no sistema. Essa página contém três componentes do tipo _dropdown_(pode ser traduzido como _lista suspensa_). Através delas, o usuário administrador pode selecionar o tipo de medalha, o esporte e o país. Feito isso, a medalha será cadastrada no banco. Como já mencionado na seção `Pais`, os usuários cadastrados serão notificados via e-mail sobre a nova medalha.