export class TestJest {

    sumFunction(x: any, y: any) {
        return x + y;
    }

    diffFunction(x: any, y: any){
        return x-y;
    }

    divisionFunction(x: any, y: any){
        return x/y;
    }

    multiplicationFunction(x: any, y: any){
        return x*y;
    }

    isEqualFunction(x: any, y: any){
        if(x==y){
            return true;
        }
        else return false;
    }

}