export default class Inventory {
    constructor() {
        this._products = new Array();   
    } 
    
    getArray() {
        return this._products;
    }

    add(product) {
        let pos = this._findProducts(product);        
        if(this._getLength() < 20) {
            if(pos) {  
                return false;         
            } else {
                this._products.push(product);      
                return true; 
            }
        } else {
            return null;
        }    
    }  
    
    delete(code) {
        let pos = this._verifyCode(code);

        if(pos >= 0) {
            for(let i = pos; i < (this._products.length - 1); i++) {                   
                this._products[i] = this._products[i+1];       
            }            
            this._products.pop();
            return true;
        } else {
            return null;
        }        
    }

    search(product) {
        let verify = this._verifyCode(product);

        if(verify < 0) {            
            return null;
        } else {    
            return this._products[verify];
        }
    }

    list() {
        if(this._getLength() <= 0) {
            return false;
        } else {
            return true;
        }  
    }

    reverseList() {
        if(this._getLength() <= 0) {    
            return false;          
        } else {   
            return true;      
        }    
    }
   
    _getLength() {
        return this._products.length;
    }    

    _verifyCode(code) {
        for(let i= 0; i < this._getLength(); i++) {
            if(this._products[i].getCode() === code){ 
                return i;     
            }        
        }
        return -1;  
    }

    _findProducts(product) {
        for(let i= 0; i < this._getLength(); i++) {
            if(this._products[i].getCode() === product.getCode()){ 
                return true;
            }    
        }
        return false;    
    }

    _organizeInventory() {
        let pos = this._products.length - 1;
        let nPos;

        for(let i = 0; i < this._getLength(); i++) {
            if(this._products[pos].getCode() < this._products[i].getCode()) {
                nPos = this._products[pos];
                this._products[pos] = this._products[i];
                this._products[i] = nPos;
            }
        }
    }
}