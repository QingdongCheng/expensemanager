import React from 'react';

const EditExpensePage = (props) => {

    console.log(props);
    return (
        <div>
            This is from Editexpense component. Id is {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;