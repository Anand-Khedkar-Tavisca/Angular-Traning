import {Paragraph} from './paragraph';
class ParagraphProcessor {
    private products: Array<Paragraph>;
    constructor(private paragraph:Paragraph){
    }

    findIndexes(a:string):Array<number>{
      let indexes: Array<number>= new Array<number>();

      for(let i=0;i<this.paragraph.Content.length;i++)
      {
          if(this.paragraph.Content[i]===a)
          {
              indexes.push(i);
          }
      }
       return indexes;
    }

    findTotalStatements():number{
       return this.paragraph.Content.split(".").length;
      }

      capitalizeLetters():string{
        let capitalizedWords:Array<string> = new Array<string>();
        let words = this.paragraph.Content.split(" ");
        for(let word of words)
        {
            capitalizedWords.push(word.charAt(0).toUpperCase() + word.substring(1));
        }
         return capitalizedWords.join(" ");
       }
}
let paragraph = new Paragraph("Before – Original",`Sunday is my favorite day because I spend the day watching football with my dad.On Sunday, unlike the other days of the week when he works, my dad spends the whole day with me watching football on TV. We even eat lunch together while watching. The highlight of the day is watching the Dolphins game. Dad and I get so excited, we yell and cheer together.On Sundays, I get to combine watching my favorite sport and spending time with my favorite person—what a great day!`);
let processor = new ParagraphProcessor(paragraph);
console.log("a indexes-");
console.log(JSON.stringify(processor.findIndexes("a")));

console.log("Total statements-");
console.log(JSON.stringify(processor.findTotalStatements()));

console.log("capitalizeLetters-");
console.log(JSON.stringify(processor.capitalizeLetters()));



