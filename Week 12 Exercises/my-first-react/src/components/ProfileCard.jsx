export function ProfileCard(props) {
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.age}</p>
        </div>
    );
}