import React from 'react';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    /* qty being grabbed from query-string in the url */
    /* 
        if [props.location.search] exist split the string at ['='] and 
        put these elements in an array. Take the element and index `[1]`
        and cast it into a number. Then set this number to qty. If
        [props.location.search] doesn't exist set qty to [1]
    */
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1
    ; 
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
        </div>
    );
}
