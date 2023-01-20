import Http from '@/utils/http'

export default new class article extends Http {
    // get recommend movies
    getHot() {
        return this.get('/app/v1/article/hotView')
    }

}