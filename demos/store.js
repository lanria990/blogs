/**
 * Created by Yangjl on 2017/4/24.
 */

class TodoStore{
    authorStore

    @observable todos = [];
    @observable isLoading = true;

    constructor(authorStore){
        this.authorStore = authorStore;
        this.loadTodos()
    }

    loadTodos(){}
    updateTodoFromserver(json){}
    createTodo(){}
    removeTodo(){}

    render(props){
        const {flatternData } = props;
        const viewData = formatData(flatternData); //构造数据
        //render viewData
    }
}