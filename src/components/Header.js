import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>Getting random number - { this.props.randomNumber }</h1>
                <p>Tôi đã chọn một số random trong khoảng 1 đến 100, bạn có thể đoán được?  </p>
            </div>
        )
    }
}
export default Header;