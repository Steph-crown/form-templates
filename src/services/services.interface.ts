export interface ITemplateData {
    name: string;
    created: string;
    category: string[];
    description: string;
    link: string;
}

// [
//       Template {
//                  name: string <Template name>,
//                  created: string <Template creation date in iso format>,
//                  category: array[string] <Categories assigned to the template>
//                  description: string <Template description>
//                  link: string <Template link>
//               }
//  ]
