var array = [3506, 5706 ,706 ,7045 ,5927 ,7101 ,5858 ,8298 ,8950 ,304 ,6887 ,3440 ,7869 ,912 ,6134, 8480, 3896 ,1732 ,7855 ,8622, 1923, 852 ,9627 ,5902, 6693, 645, 8157, 4811, 62, 5272 ,3928 ,3295 ,2646 ,8892 ,530 ,5751, 7403, 8190 ,9658, 3502 ,1688, 7605, 5733 ,31, 22, 4178, 2036, 4362 ,4740 ,6700, 944, 8376, 2708, 6857, 9766, 8418, 9414, 8373, 1004, 9951, 8581, 5880, 59, 6850, 1300, 2843, 4569, 3674, 6564, 1063, 7394, 3984, 2369, 1931, 1980, 4296, 7472, 3395, 9328, 3304, 9072, 5770, 5593, 5393, 9666, 4656, 8635, 4080, 47, 3555, 5782, 6143, 2693, 1162, 9351, 7949, 387, 583, 8645, 2630]; 
function swap(array, leftIndex, rightIndex)
{
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}
function partition(array, left, right) 
{
    var pivot   = array[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right) 
{
    var index;
    if (array.length > 1) {
        index = partition(array, left, right); 
        if (left < index - 1) { 
            quickSort(array, left, index - 1);
        }
        if (index < right) { 
            quickSort(array, index, right);
        }
    }
    return array;
}
