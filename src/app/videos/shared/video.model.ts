interface IVideoModel{  
    VideoTypeName: string;
    Subject: string;
    Comment: string;
    EstimatedHours: number;
    Name:string;
    Poster:string;
    Thumbnail:string;
    VideoType: number;
    isFavourite: boolean;
    Source: string;
    Id: number;
}

export class VideoModel implements IVideoModel {  
    constructor (
        public VideoTypeName: string, 
        public Subject: string,
        public Comment: string,
        public EstimatedHours: number,
        public Name:string,
        public Poster:string,
        public Thumbnail:string,
        public VideoType: number,
        public isFavourite: boolean,
        public Source: string,
        public Id: number
        

        
        ) {
    }
} 