

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }

];

// 1. Tìm và trả về object có author là 'Steve Jobs'.
let result = library.find(function (library, index) {
    return library.author === "Steve Jobs"
})



// 2. Thay đổi readingStatus của object đó thành false:

result.readingStatus = false;
console.log(result)




// 3. Trả về mảng chỉ chứa title các object:
let result2 = library.map(function (library, index) {
    return library.title
})
console.log(result2);





// 4. Filter những object mà title chứa chuỗi 'the':

 let result3 = library.filter(function (library, index) {
     return library.title.includes("The")
 });
 console.log(result3)

// 5. Thêm thuộc tính price: 100000 cho mỗi object
let result4 = library.map(function (library, index) {
    return {
        author: library.author,
        title: library.title,
        readingStatus: library.readingStatus,
        price: "100000"

    }
});
console.log(result4);



// 6. Thêm một object mới vào mảng trên.

console.log(result4.push(
    {
    author: 'Huyen Chip',
    title: 'Xach ba lo len va di',
    readingStatus: false,
    price: "110000",
}
))
console.log(result4);

// 7. Filter những object có readingStatus là false.
let result5 = result5.filter(function (library, index) {
    return library.readingStatus === false
})
console.log(result5);


