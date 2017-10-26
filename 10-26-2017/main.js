console.log("hello");
//arrays
let bucket_list=["learn to fly",67, "go to Japan"];
console.log(bucket_list[2]);
//for loop
for (var i = 0; i < bucket_list.length; i++) {
  console.log(bucket_list[i]);
};



let movie_list_1=[
"1movie 1",
"2movie 2",
"12movie 5",
"13movie 6"
];

let movie_list_2=[
  "movie 3",
  "movie 5",
  "movie 1"
];

for (var i = 0; i < movie_list_1.length; i++) {
  for (var j = 0; j < movie_list_2.length; j++) {
    if(movie_list_1[i]===movie_list_2[j]){
      console.log(movie_list_1[i]);
    }
  }
}
//while loop
let balance=1000;
let years=0;
while (balance<1000000) {
balance += balance*0.07;
years++;
}
console.log(years);


//iterarors
movie_list_1.forEach(movie => console.log("-"+movie));

let new_list = movie_list_1.filter(movie => movie.slice(0,1)=="1");
console.log(new_list);
