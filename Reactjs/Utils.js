    // handle input from user
    handleChange = evn => {
        const {target} = evn
        const value = target.value
        const {name} = target
        this.setState({ [name]: parseInt(value) });
    }

    // handle submit of answer
    onSubmit = evn => {
        evn.preventDefault()            
    }

        // Random Number Generator 1-100
        randomNum = () => {
            return Math.floor(Math.random()*100) + 1;
        }