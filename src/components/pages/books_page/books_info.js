import React, {useState, useEffect} from "react";
import './books_info.css';
import $ from 'jquery';

const Book_info = ({b, active, setActive}) => {
    var i = 1;
    $('.card-block_book').on("dblclick", ( function() {
        if(i%2 === 0) { 
            $(this).find('.card_book').removeClass('flip')
            i++;
        } 
        else {
            $(this).find('.card_book').addClass('flip');
            i--;
        }
    }))

    var [books, setBooks] = useState([])
    function BooksDiv (books) {
        var book = books[2];
        var myName = document.getElementsByClassName('book_item_name')
        var myInfo = document.getElementsByClassName('book_item_info')
        var t = 0;
        delete book.id;

        Object.entries(book).map(([key, value]) => {
            myName[t].textContent = key + ': '
            myInfo[t].textContent = value
            t++;
        })
    }

    useEffect(() => {
        fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/books")
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                else {
                    console.log("ERROR")
                    throw Error
                }
                })
            .then(books => {
                setBooks(books);
                BooksDiv(books);
            }) 
            .catch(error => console.log(error))
        }, []);

        return(
        <>
            <div className = {active ? 'main_book active1':'main_book'}>
                <div className = "card-block_book">
                    <div className = "card_book">
                        <div className = "side_book front_book">
                            <div className = "cancel_frame_info_book">
                                <div className = "cancel_frame_book">
                                    <div className = "cancel_book" onClick = {() => setActive(false)}></div>
                                </div>  
                            </div> 
                            <div className = 'book_main'>
                                <div className = 'book_str'>
                                    <div className = 'book_item_name'></div>
                                    <div className = 'book_item_info'></div>
                                </div>
                                <div className = 'book_str'>
                                    <div className = 'book_item_name'></div>
                                    <div className = 'book_item_info'></div>
                                </div>
                                <div className = 'book_str'>
                                    <div className = 'book_item_name'></div>
                                    <div className = 'book_item_info'></div>
                                </div>  
                                <div className = 'book_str'>
                                    <div className = 'book_item_name'></div>
                                    <div className = 'book_item_info'></div>
                                </div>    
                                <div className = 'book_str'>
                                    <div className = 'book_item_name'></div>
                                    <div className = 'book_item_info'></div>
                                </div>     
                            </div>
                        </div>
                        <div className = 'side_book back_book'></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Book_info;