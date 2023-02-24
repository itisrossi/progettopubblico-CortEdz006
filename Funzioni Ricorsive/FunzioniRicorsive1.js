Quicksort(array, start, end)     
{  
   if (start < end)     
   {  
      pIndex = Partition(array, start, end)
      Quicksort(array,start,pIndex-1)
      Quicksort(array,pIndex+1, end)
   }
}

partition (array, start, end)
{
    pivot = array[end];  
    i = (start - 1)
for (j = start; j <= end- 1; j++)
    {
        if (array[j] < pivot)
        {
            i++; 
            swap (array[i],array[j]);
        }
    }
    swap (arr[i + 1], arr[end])
    return (i + 1)
}

function swap(arr, i, j) 
{    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, start, end) {

    let pivot = arr[end];
    let i = (start - 1);
 
    for (let j = start; j <= end - 1; j++) {
 
        if (arr[j] < pivot) {          
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end);
    return (i + 1);
}

function quickSort(arr, start, end) {
    if (start < end) {       
        let pi = partition(arr, start, end);
        quickSort(arr, start, pi - 1);
        quickSort(arr, pi + 1, end);
    }
}

function printArray(arr, size) {
    for (let i = 0; i < size; i++)
        document.write(arr[i] + " ");
 
    document.write("");
}

let arr = [7, 2, 1, 6, 8, 5, 3, 4];
let n = arr.length;
 
document.getElementById("demo").initHTML="Orginal array:" + arr;
quickSort(arr, 0, n - 1);
document.getElementById("demo").initHTML="Sorted array:" + arr;