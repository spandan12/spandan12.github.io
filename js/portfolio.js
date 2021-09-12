function hideElement(element){
    element.style.display = 'none';
}

function highlightTag(element){
    element.style.color = '#7e6df6';
    element.style.borderColor=  '#7e6df6';
}

function hideAllTags(search){
    document.querySelectorAll('.tag').forEach(tagItem => {
        const value = tagItem.innerHTML;
        if (search !== value){
            hideElement(tagItem);
        }
      })
}

function showTagElement(element){
    element.style.display = 'inline-block';
}

function showElement(element){
    element.style.display = 'inline-block';
}

function adjustHeight(){
    element = document.querySelector('.portfolio-wrapper');
    element.style.height ='1000px';

    element = document.querySelector('.resume-lower-description');
    element.style.height ='500px';
}

function readjustHeight(){
    element = document.querySelector('.portfolio-wrapper');
    element.style.height ='auto';

    element = document.querySelector('.resume-lower-description');
    element.style.height ='auto';
}

document.querySelectorAll('.tag').forEach(item1 => {
    item1.addEventListener('click', event => {
        const value = event.target.innerHTML;
        document.querySelectorAll('.resume-element').forEach(item => {
            const tags = item.querySelectorAll('.search-tag');

            let count = 0;
            tags.forEach(innerItem => {
                if (value === innerItem.innerHTML) {
                    count ++;
                }
            })

            if(count == 0){
                hideElement(item);
            }
            showTagElement(document.querySelector('.clear'));
            hideAllTags(value);
            item.style.width = '100%';            
            adjustHeight();
        })
    })
})

document.querySelector('.clear').addEventListener('click', () => {

    document.querySelectorAll('.resume-element').forEach(item => {
        item.style.width = '70%';
        showElement(item);
    })

    document.querySelectorAll('.tag').forEach(item => {
        showTagElement(item);
    })

    hideElement(document.querySelector('.clear'));
    readjustHeight();
})