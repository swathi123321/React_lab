import{useState}from 'react';
import BasicFigure from"./BasicFgure";
import "./FigureList.css";
const initialImages=[
    {src:"https://www.bing.com/th/id/OIP.mqvnSfa4h_XdAi77Nd_vAQHaE8?w=235&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",caption:"Image1"},
    {src:"https://www.bing.com/th/id/OIP.3KuHHk3Ft6NYKYf9x5V6LQHaEo?w=247&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",caption:"Image2"},
    {src:"data:image/webp;base64,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", caption:"Image3"}
];
const FigureList=()=>{
    const [images,setImages]=useState(initialImages);

    const addImage=()=>{
        const randomId=Math.floor(Math.random()*1000);
        const newImage={
            src:`https://picsum.photos/480/300?random=${randomId}`,
            caption:`Image ${images.length+1}`      
        };
    setImages([...images,newImage]);

    };
    const removeImage=()=>{
    setImages(images.filter((_,i)=>i!==index));

    };
    return(
    <div className="container">
        <h1>Dynamic Image Gallery</h1>
        <div className="buttons">
            <button onClick={addImage}>Add Image</button>

        </div>
        <div className="gallery">
            {images.map((image,index)=> (
                <BasicFigure key={index} src={image.src}
            caption={image.caption}onRemove={()=>removeImage(index)}/>
               ))}   


        </div>
    </div>
    );

};
export default FigureList;
