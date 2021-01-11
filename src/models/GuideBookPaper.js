import ActiveData from '@/models/ActiveData'
import GuideBookPaperApi from '@/services/oblyk-api/guideBookPaperApi'

export default class GuideBookPaper extends ActiveData {
  find (id) {
    return this.apiFind(GuideBookPaperApi, id)
  }

  url (page = 'infos') {
    return `/paper-guide-books/${this.id}/${this.slug_name}/${page}`
  }

  coverUrl () {
    if (this.cover) {
      return `${process.env.VUE_APP_OBLYK_API_URL}${this.cover}`
    } else {
      return require('@/assets/svgs/paper-guide-book-default.svg')
    }
  }
}