export class ViewsHQ {
   private appId: string;
    private apiKey: string;
    constructor(appId: string, apiKey: string) {
      this.appId = appId;
      this.apiKey = apiKey;
    }
  
    //generate jsdoc for this function
    /**
     * Get the views for a given post
     * @param postId - The post id
     * @returns The views for the post
     * @example
     * const views = await getViews('1234');
     * console.log(views);
     * //=> 100
     */
    async getViews(postId: string) {
      const response = await fetch(
        `https://api.hubapi.com/analytics/v2/views/${this.appId}?hapikey=${this.apiKey}`
      );
      const views = await response.json();
      return views;
    }
  
  }
  