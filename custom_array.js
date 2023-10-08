const arr_input = document.getElementById("user_input");//select the input element
const arr_output = document.getElementById("output_card");//select the outut div

//create array
const create_arr_btn =document.getElementById("create");
function create(val){
    const user_text = val;
    const text_to_arr = user_text.split(',');
    alert(`${text_to_arr} Array Created`);
}
create_arr_btn.addEventListener("click",()=>{
    create(arr_input.value);
})

//print array
const print_arr_btn =document.getElementById("print");
function print(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    arr_output.innerText = `[${text_to_arr}]`;
}
print_arr_btn.addEventListener("click",()=>{
    print(arr_input.value);
})

//array length
const arr_len_btn =document.getElementById("length");
function arr_len(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    arr_output.innerText = text_to_arr.length;
}
arr_len_btn.addEventListener("click",()=>{
    arr_len(arr_input.value);
})

//array to string
const arr_to_str_btn =document.getElementById("string");
function arr_to_str(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    arr_output.innerText = text_to_arr.toString();
}
arr_to_str_btn.addEventListener("click",()=>{
    arr_to_str(arr_input.value);
})

//pop array
const arr_pop_btn =document.getElementById("pop");
function arr_pop(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const after_pop = text_to_arr.pop();
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_pop_btn.addEventListener("click",()=>{
    arr_pop(arr_input.value);
})

//push array
const arr_push_btn =document.getElementById("push");
function arr_push(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const push_value = prompt ("Enter Value To Push");
    const after_push = text_to_arr.push(push_value);
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_push_btn.addEventListener("click",()=>{
    arr_push(arr_input.value);
})

//shift array
const arr_shift_btn =document.getElementById("shift");
function arr_shift(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const after_shift = text_to_arr.shift();
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_shift_btn.addEventListener("click",()=>{
    arr_shift(arr_input.value);
})

//unshift array
const arr_unshift_btn =document.getElementById("unshift");
function arr_unshift(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const unshift_value = prompt("Enter Value To Unshift");
    const after_unshift = text_to_arr.unshift(unshift_value);
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_unshift_btn.addEventListener("click",()=>{
    arr_unshift(arr_input.value);
})

//delete array element
const arr_del_btn =document.getElementById("delete");
function arr_del(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const del_index = prompt("Enter Index Number Of Element To Be Deleted")
    const after_del = delete text_to_arr[del_index];
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_del_btn.addEventListener("click",()=>{
    arr_del(arr_input.value);
})

//reverse array
const arr_rvrs_btn =document.getElementById("reverse");
function arr_rvrs(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const after_rvrs = text_to_arr.reverse();
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_rvrs_btn.addEventListener("click",()=>{
    arr_rvrs(arr_input.value);
})

//splice array
const arr_splice_btn =document.getElementById("splice");
function arr_splice(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const splice_position = prompt("Enter Position To Add");
    const splice_qty = prompt("Enter How Many To Add");
    const splice_value = prompt("Enter Elements To Add");
    const after_splice = text_to_arr.splice(splice_position,splice_qty,splice_value);
    arr_output.innerText = `[${text_to_arr}]`;
}
arr_splice_btn.addEventListener("click",()=>{
    arr_splice(arr_input.value);
})

//slice array
const arr_slice_btn =document.getElementById("slice");
function arr_slice(val){
    arr_output.innerText = "";
    const user_text = val;
    const text_to_arr = user_text.split(',');
    const slice_value = prompt("Enter Index Number")
    const after_slice = text_to_arr.slice(slice_value);
    arr_output.innerText = `[${after_slice}]`;
}
arr_slice_btn.addEventListener("click",()=>{
    arr_slice(arr_input.value);
})

//clear button
function clear_arr(){
    arr_output.innerText = "";
    arr_input.value = "";
}

