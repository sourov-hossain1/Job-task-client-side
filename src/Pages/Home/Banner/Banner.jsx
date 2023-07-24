import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-[400px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQSXLSPc3k6bCsaZWjj4KkYw24ZfikBtM5Q&usqp=CAU" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-[400px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjekOfP4cn_U8L5US8-tAQSKk-99Rfj7WqsA&usqp=CAU" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-[400px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9jjL9I9QmV-yGIXk8s2k7RPkRHAi5r0oaA&usqp=CAU" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full h-[400px]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQSXLSPc3k6bCsaZWjj4KkYw24ZfikBtM5Q&usqp=CAU" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </>
    );
};

export default Banner;