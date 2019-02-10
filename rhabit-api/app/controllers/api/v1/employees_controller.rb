module Api
    module V1
        class EmployeesController < ApplicationController
            def index
                employees = Employee.order('id ASC');
                render json: {status: 'SUCCESS', message: 'Loaded employees',
                data:employees},status: :ok

            end

            def show
                employee = Employee.find(params[:id]);
                render json: {status: 'SUCCESS', message:'Loaded employee',
                data:employee},status: :ok
            end
            
            def create
                employee = Employee.new(employee_params);
                if employee.save
                     render json: {status: 'SUCCESS', message:'Saved employee',
                data:employee},status: :ok
                else
                     render json: {status: 'ERROR', message:'Employee Not Saved',
                data:employee.errors},status: :unprocessable_entity
                end
            end

            def destroy
                employee = Employee.find(params[:id]);
                employee.destroy
                render json: {status: 'SUCCESS', message:'Deleted employee',
                data:employee},status: :ok
            end

            def update
                employee = Employee.find(params[:id]);
                if employee.update_attributes(employee_params)
                    render json: {status: 'SUCCESS', message:'Updated employee',
                data:employee},status: :ok
                else
                    render json: {status: 'ERROR', message:'Employee Not Updated',
                data:employee.errors},status: :unprocessable_entity
                end
            end


            private

            def employee_params
                params.permit(:first_name, :last_name, :title, :manager_id);

            end
        end
    end
end
