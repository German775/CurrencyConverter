class AuthorizationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", surname: "", password: "" };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSurnameChange = this.onSurnameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    onNameChange(e) {
        this.setState({ name: e.target.value });
    }
    onSurnameChange(e) {
        this.setState({ surname: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        var personName = this.state.name.trim();
        var personSurname = this.state.surname.trim();
        var personPassword = this.state.password.trim();
        if (!personName) {
            return;
        }
        this.props.onCheckSubmit({ name: personName, surname: personSurname, password: personPassword });
        this.setState({ name: "", surname: "", password: "" });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <input type="text"
                        placeholder="Имя"
                        value={this.state.name}
                        onChange={this.onNameChange} />
                </p>
                <p>
                    <input type="text"
                        placeholder="Фамилия"
                        value={this.state.surname}
                        onChange={this.onSurnameChange} />
                </p>
                <p>
                    <input type="password"
                        placeholder="Пароль"
                        value={this.state.password}
                        onChange={this.onPasswordChange} />
                </p>
                <input type="submit" value="Сохранить" />
            </form>
        );
    }
}

class Autorization extends React.Component {

    constructor(props) {
        super(props);
        this.onCheckUser = this.onCheckUser.bind(this);
        this.state = { isLoggedIn: false };
    }

    onCheckUser(person) {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (person) {
            var data = JSON.stringify({ "name": person.name, "surname": person.surname, "password": person.password });
            var xhr = new XMLHttpRequest();
            xhr.open("post", this.props.apiUrl, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onload = function () {
                if (xhr.status == 200) {
                    var dateJson = JSON.parse(xhr.responseText);
                    sessionStorage.setItem("tokenKet", dateJson.access_token);
                    console.log(dateJson.access_token);
                }
            }.bind(this);
            xhr.send(data);
        }
    }

    render() {
        return <div>
            <AuthorizationForm onCheckSubmit={this.onCheckUser} />

               </div>;
    }
}

//<Check check={Check} />;

function UserGreeting(props) {
    return <h1>С возвращением!</h1>;
}

ReactDOM.render(
    <Autorization apiUrl="/token" />,
    document.getElementById("content")
);