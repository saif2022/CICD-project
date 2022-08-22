export class Blog {
    id: number;
    title: string;
    description: string;
    category: string;
    imgpath: string;
    writter:string;
    publishDate:string;
    constructor(data: any) { 
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.description = data.description;
            this.category= data.category;
            this.imgpath= data.imgpath;
            this.writter= data.writter;
            this.publishDate= data.publishDate;
        }
        
    }
}