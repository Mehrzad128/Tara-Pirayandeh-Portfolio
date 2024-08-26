export interface image {
    id : number ,
    source : string ,
    title : string ,
    subTitile : string
}

export class gallerySRC{
    galleryImages : image[] = [
        {id:1 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:2 , source:'Facetune_05-05-2024-01-43-59' , title:'' , subTitile:''},
        {id:3 , source:'Facetune_05-05-2024-01-23-48_jpg' , title:'' , subTitile:''},
        {id:4 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:5 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:6 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:7 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:8 , source:'FullSizeRender' , title:'' , subTitile:''},
        {id:9 , source:'FullSizeRender' , title:'' , subTitile:''},
    ];

    row1 = this.galleryImages.filter(m=> m.id<4);
}
