class TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :update, :destroy]

  # GET /topics
  def index
    @topics = Topic.all

    render json: @topics
  end

  # GET /topics/1
  def show
    render json: @topic
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_topic
      @topic = Topic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def topic_params
      params.require(:topic).permit(:name)
    end
end
