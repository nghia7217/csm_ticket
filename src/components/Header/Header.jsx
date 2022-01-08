import "./header.css"

export default function Header(props) {
    return (
        <div className="header">
            <h3 className="header__title">
                {props.name}
            </h3>
        </div>
    )
}
