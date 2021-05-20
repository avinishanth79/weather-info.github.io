export function scrollButtonFunc(boxContainerRef,leftClickRef,rightClickRef){

    leftClickRef.addEventListener("click", () => {
        boxContainerRef.scrollLeft -= 340;
    });
    
    rightClickRef.addEventListener("click", () => {
        boxContainerRef.scrollLeft += 340;
    });
    
}