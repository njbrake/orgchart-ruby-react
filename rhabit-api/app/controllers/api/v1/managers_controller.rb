module Api
    module V1
        class ManagersController < ApplicationController
            def show
                managersemployees = Employee.where("manager_id = ?", params[:id]);
                render json: {status: 'SUCCESS', message:'Loaded managers employees',
                data:managersemployees},status: :ok
            end
        end
    end
end
