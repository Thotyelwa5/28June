<template>
        <section class="checkout-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description (Price)</th>
                </tr>
              </thead>
              <tbody id="checkout-body"></tbody>
              <tfoot>
                <tr>
                  <td colspan="2">Total:</td>
                  <td id="total-description">R0</td>
                </tr>
              </tfoot>
            </table>
        </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
 .checkout-table{
    width: 100%;

 }
 table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  tfoot td {
    font-weight: bold;
  }
  #total-description {
    text-align: right;
  }
 

</style>