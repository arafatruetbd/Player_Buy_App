import React from 'react';

const Cart = (props) => {

    function UserRow({ player, index }) {
        return (
            <p>{index + 1}: {player}, Salary:{salary[index]}</p>
        )
    }


    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0, players = [], salary = [];
    cart.forEach((cart) => {
        if (!players.includes(cart.name)) {
            players.push(cart.name);
            salary.push(cart.salary);
            total += cart.salary;
        }
    })
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Total Player: {players.length}</p>
            <p>Total Budget: {total}</p>
            <h4>Players Added</h4>
            {players.map((player, index) =>
                <UserRow key={player} player={player} index={index} />
            )}
        </div>
    );
};

export default Cart;