// import scroll from "@/components/common/scroll/Scroll";
import backtop from "@/components/common/backTop/BackTop";

export const backttop = {
    components:{
        backtop
    },
    data(){
        return{
            show: false
        }
    },
    methods:{
        backClick() {
            this.$refs.backcontent.scrollTo(0, 0, 500);
          }
    }
}