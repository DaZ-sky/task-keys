import { useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")

    if(props.sorting == "ASC"){
        props.initialData.sort((a, b) => a.id - b.id)
    }
    else{
        props.initialData.sort((a, b) => b.id - a.id)
    }

    return (
        <ol>{props.initialData.map((item) => {
            if(item.id == id){
                return (
                    <input
                            onChange={() => setName(name)}
                            key={item.id}
                            defaultValue={item.name}
                            onKeyDown={(e) => {
                                if (e.key == 'Escape') {
                                    setId(0);
                                    setName(item.name)
                                }
                                if (e.key == 'Enter') {
                                    item.name = e.currentTarget.value;
                                    setId(0);
                                }
                            }}
                        />
                );
            }
            else{
            return (<li key={item.id} onClick={() => setId(item.id)}>{item.name}</li>);
            }
        })}</ol>
    )
}
