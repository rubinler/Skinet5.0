using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specfications
{
    public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
    {
        public ProductsWithTypesAndBrandsSpecification() 
        {
            AddIncludes();            
        }
        public ProductsWithTypesAndBrandsSpecification(int id) 
            :  base(x => x.Id == id)
        {
            AddIncludes();
        }
        private void AddIncludes() 
        {
            AddInclude(x => x.ProductType);
            AddInclude(x => x.ProductBrand);
        }
    }
}