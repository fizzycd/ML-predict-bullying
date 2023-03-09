import Form from "./Form";

function Main({ onFormSubmit, predictions }) {
    return (
        <>
            <Form
                onFormSubmit={onFormSubmit} />

            <p>combined:</p>
            <p>{predictions.combined}</p>
            <p>inside:</p>
            <p>{predictions.inside}</p>
            <p>outside:</p>
            <p>{predictions.outside}</p>
            <p>cyber:</p>
            <p>{predictions.cyber}</p>
        </>

    )
}

export default Main;