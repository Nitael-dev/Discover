## margin

Espaços entre os elementos

─ margin-top | margin-right | margin-bottom | margin-left
─ values: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand (agrupamento) */
    margin: 12px 16px 10px 4px /* sentido horário*/
    margin: 12px 16px 0; /* top, left, right, bottom */
    margin: 8px 16px; /* top, bottom, left, right */    
    margin: 8px; /* all directions */
}
```

    * Cuidado com margin collapsing (top se junta ao bottom)









https://developer.mozilla.org/en-US/docs/Web/CSS/margin