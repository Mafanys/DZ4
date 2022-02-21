const startstate = 0;

export const reduser = (state = startstate, action) =>{
switch(action.type){
    case 'PLUS':
        return state + 1;
    case 'MINUS':
        return state - 1;
    case "ENG":
        return state = "Hellow world";
    case "UKR":
        return state = "Привіт світ";
    default:
        return state;
}
}