import React from "react";
import { Modal,Button } from "react-bootstrap";

import Card from "../components/card";

export default class Gallery extends React.Component{
constructor(){
    super()
    this.state={
        buku: [
            {
                isbn: "121",
                judul: "Komet",
                penulis: "Tere Liye",
                penerbit: "CV Harapan Kita",
                harga: "Rp 35000,-",
                cover:"https://drive.google.com/uc?id=1UXa5oJm5SWNX9p2JrPRjdwOcxaqmP3Xs"
            },

            {
                isbn: "111",
                judul: "Hujan",
                penulis: "Tere Liye",
                penerbit: "CV Nusa Bangsa",
                harga: "Rp 45000,-",
                cover:"https://drive.google.com/uc?id=1BH9hsP0yEDYMliPWbUe2dVm2Zj0DIlAT"
            },

            {
                isbn: "101",
                judul: "Bumi",
                penulis: "Tere Liye",
                penerbit: "CV Nusa Bangsa",
                harga: "Rp 55000,-",
                cover:"https://drive.google.com/uc?id=1DIW8qvYb9AvK7g8WiqLjSgupnP418ZN0"
            },

        ],
        action: "",
        isbn: "",
        judul: "",
        penulis: "",
        penerbit: "",
        harga: 0,
        cover: "",
        selectedItem: null,
        isModalOpen: false
    }
}
add = () => {
    this.setState({
        isModalOpen: true
    })
}
handleClose = () => {
    this.setState({
        isModalOpen: false
    })
}
edit = (item) => {
    console.log('edit')
}
drop = (item) => {
    console.log('drop')
}
    render(){
        return(
            <div className="container">
                    <div className="alert alert-warning">
                    <h2 className="text-center"><b>DAFTAR BUKU</b></h2>
                    </div>
                    <div className="alert alert-success">
                    <button className="btn btn-success" onClick={() => this.add()}>
                        Keranjang
                    </button>
                    <div className="row">
                    {this.state.buku.map((item,index) =>(
                            <Card cover={item.cover}
                              judul={item.judul}
                              penulis={item.penulis}
                              penerbit={item.penerbit}
                              harga={item.harga}
                              onEdit={() => this.edit(item)}
                              onDrop={() => this.drop(item)}
                              />
                    ))}
                    </div>
                </div>

            </div>
        )
    }
}