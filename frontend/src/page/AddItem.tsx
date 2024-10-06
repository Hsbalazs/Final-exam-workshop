import { ChangeEvent, FormEvent, useState } from 'react';
import '../App.css'
import { NavLink, useNavigate } from "react-router-dom";
import { Button, useToast } from '@chakra-ui/react'
import { addItem } from '../httpClient';
import CurrencyInput from '../input/CurrencyInput';

type ItemFormData = {
    name: string;
    description: string;
    photoUrl: string;
    price: string;
}

function AddItem() {
    const [item,setItem] = useState<ItemFormData>({
        name: "",
        description: "",
        photoUrl: "",
        price: ""
    })

    const toast = useToast()
    const navigate = useNavigate()

    const handleItemChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement>) => setItem({...item, [name]: value});

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => setItem({...item, price: e.target.value});

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addItem(item);
            setItem({name: "", description: "", photoUrl: "", price: ""})
            navigate("/itemList")
            toast({
                title: 'Successfully added!👍',
                description: 'Item successfully added.',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            toast({
                title: 'Item transfer failed.😠',
                description: "Item is not added.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    return (
        <>
            <h1>Register to the MARKETPLACE</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Item name:</label>
                <input type="text" name='name' value={item.name} onChange={handleItemChange}></input>
                <label htmlFor='description'>Item description:</label>
                <input type="text" name='description' value={item.description} onChange={handleItemChange}></input>
                <label htmlFor='photoUrl'>Photo:</label>
                <input type="file" name='photoUrl' value={item.photoUrl} onChange={handleItemChange}></input>
                <label htmlFor='price'>Item price:</label>             
                <CurrencyInput value={item.price} onChange={handlePriceChange}/>
                <Button type="submit">Save</Button>
            </form>
            <NavLink to={"/"}>Discard</NavLink>
        </>
    )
}
export default AddItem
