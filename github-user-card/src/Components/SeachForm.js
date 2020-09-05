import React from 'react'

class SearchForm extends React.Component {
    state = {
        username: ""
    }
    handleChanges = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.changeUsername(this.state.username)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChanges}
                />
                <button>Search</button>
            </form>
        )
    }
}
export default SearchForm;